export default {
  hello: 'Hi',
  errors: {
    required: '{name} is required',
    invalid: '{name} is invalid'
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
