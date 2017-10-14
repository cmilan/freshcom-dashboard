import _ from 'lodash'
import { dollar } from '@/helpers/filters'

export default {
  objectWithDefaults () {
    return {
      id: undefined,
      type: 'OrderLineItem',

      name: '',
      printName: '',
      orderQuantity: 1,
      isEstimate: false,
      subTotalCents: null,

      product: null,
      productItem: null,
      sku: null,
      unlockable: null,

      children: []
    }
  },

  tableData (lineItems) {
    return _.reduce(lineItems, (acc, lineItem) => {
      let quantity = `${lineItem.orderQuantity}`
      if (lineItem.isEstimate) {
        quantity += ` (~ ${lineItem.chargeQuantity}${lineItem.priceChargeUnit})`
      } else if (lineItem.priceEstimateByDefault) {
        quantity += ` (${lineItem.chargeQuantity}${lineItem.priceChargeUnit})`
      }

      let taxTotalCents = lineItem.taxOneCents + lineItem.taxTwoCents + lineItem.taxThreeCents
      let grandTotalCents = lineItem.subTotalCents + lineItem.taxOneCents + lineItem.taxTwoCents + lineItem.taxThreeCents

      let subTotal = dollar(lineItem.subTotalCents)
      if (lineItem.isEstimate) {
        subTotal = `~ ${subTotal}`
      }

      let grandTotal = dollar(grandTotalCents)
      if (lineItem.isEstimate) {
        grandTotal = `~ ${grandTotal}`
      }

      let taxTotal = dollar(taxTotalCents)

      return _.concat(acc, {
        id: lineItem.id,
        name: lineItem.name,
        quantity: quantity,
        children: lineItem.children,
        amount: `${subTotal} | ${taxTotal} | ${grandTotal}`
      })
    }, [])
  }
}
