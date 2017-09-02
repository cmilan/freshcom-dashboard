import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'

import { DEFAULT_LOCALE } from '@/env'

import SessionStore from '@/store/modules/session'
import SkuStore from '@/store/modules/sku'
import { Store as ExternalFileStore, Plugin as ExternalFilePlugin } from '@/store/modules/external-file'
import ExternalFileCollectionStore from '@/store/modules/external-file-collection'
import ProductStore from '@/store/modules/product'
import ProductItemStore from '@/store/modules/product-item'
import PriceStore from '@/store/modules/price'

Vue.use(Vuex)

const MT = {
  PUSH_ROUTE: 'PUSH_ROUTE',
  POP_ROUTE: 'POP_ROUTE',
  SET_RESOURCE_LOCALE: 'SET_RESOURCE_LOCALE'
}

export default new Vuex.Store({
  strict: true,
  plugins: [ExternalFilePlugin],
  modules: {
    session: SessionStore,
    externalFileCollection: ExternalFileCollectionStore,
    externalFile: ExternalFileStore,
    sku: SkuStore,
    product: ProductStore,
    productItem: ProductItemStore,
    price: PriceStore
  },
  state: {
    uiLocale: DEFAULT_LOCALE,
    resourceLocale: DEFAULT_LOCALE
  },
  actions: {
    pushRoute ({ commit }, route) {
      commit(MT.PUSH_ROUTE, route)
    },

    popRoute ({ commit }, n) {
      commit(MT.POP_ROUTE, n)
    },

    setResourceLocale ({ commit }, locale) {
      commit(MT.SET_RESOURCE_LOCALE, locale)
    }
  },
  mutations: {
    [MT.PUSH_ROUTE] (state, route) {
      router.push(route)
    },

    [MT.POP_ROUTE] (state, n) {
      router.go(-n)
    },

    [MT.SET_RESOURCE_LOCALE] (state, locale) {
      state.resourceLocale = locale
    }
  }
})