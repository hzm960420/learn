<template>
  <div>
    <div class="dynamicParamter">
      <label for="dynamicParam">动态参数</label>
      <input @[eventName]="event" id="dynamicParam" name="dynamicParam" type="text">
      <button @click="eventName='focus'">获取焦点</button>
      <button @click="eventName='keydown'">按键</button>
      <button @click="eventName='keyup'">键盘抬起</button><br />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      eventName: '',
    }
  },
  methods: {
    event () {
      console.log("点击不同的按钮，会检测不同的事件，从而做接下来的操作", this.eventName);
      if (this.eventName === 'focus') {
        console.log('这是获取焦点事件，我们可以在此时做一些操作');
      }
      if (this.eventName === 'keydown') {
        console.log('这是按下按键事件，我们可以在此时做一些操作');
      }
      if (this.eventName === 'keyup') {
        console.log('这是键盘抬起事件，我们可以在此时做一些操作');
      }
    },
  }
}
</script>

<style>
</style>