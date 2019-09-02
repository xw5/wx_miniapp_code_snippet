Component({
  properties: {
    isNeedReport: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    catchSubmit: function (event) {
      //触发回调
      this.triggerEvent("catchSubmit", event.detail)
    }
  }
});
