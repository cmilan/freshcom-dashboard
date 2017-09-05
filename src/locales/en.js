export default {
  hello: 'Hi',
  errors: {
    required: '{name} is required.',
    invalid: '{name} is invalid.',
    active_only_one_po: 'There is already an Active Price have the same Minimum Order Quantity.'
  },
  attributes: {
    productItem: {
      status: {
        draft: 'Draft',
        active: 'Active'
      },
      nameSync: {
        disabled: 'Disabled',
        sync_with_source: 'Sync with source',
        sync_with_product: 'Sync with product'
      }
    },
    price: {
      status: {
        draft: 'Draft',
        active: 'Active'
      }
    }
  },
  warnDanger: {
    locale: {
      message: 'Are you sure you want to change resource language? If you change, the data will be reloaded and your unsaved changes for the current resource language will be discarded.',
      confirm: 'Change',
      cancel: 'Cancel'
    },
    nav: {
      message: 'Are you sure you want to leave this screen? If you leave, your unsaved changes will be discarded.',
      confirm: 'Leave',
      cancel: 'Stay'
    }
  }
}
