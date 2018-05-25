export const formMixins = {
  props: ['fail', 'success', 'submitCall'],
  methods: {
    clear () {
      for (let key in this.form) {
        this.form[key] = ''
      }
    },
    submitFail (res) {
      console.log(res)
      if (this.fail) this.fail(res)
    },
    submitSuccess (res) {
      this.clear()
      if (this.success) this.success(res)
    },
    submit () {
      if (this.submitCall) {
        this.submitCall(this.form)
          .then(this.submitSuccess)
          .catch(this.submitFail)
      }
    }
  }
}
