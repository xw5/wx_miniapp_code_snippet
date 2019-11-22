Component({
  properties: {
    unitId: {
      type: String,
      value: ""
    },
    width:{
      type: Number,
      value: -1
    },
    adType: {
      type: String,
      value: "banner"
    }
  },
  data:{
    isAdSuccess: true
  },
  methods: {
    adSucessLoad:function() {
      this.setData({
        isAdSuccess: true
      });
      this.triggerEvent("adLoadCallback", true);
    },
    adErrorLoad:function() {
      this.setData({
        isAdSuccess: false
      });
      this.triggerEvent("adLoadCallback", false);
    }
  }
});
