// 两个类共同拥有，抽象出来
interface Radio {
  switchRadio(trigger: boolean): void
}
// 单独拥有
interface Battery {
  checkBattery()
}
// 合并接口
interface RadioWithBattery extends Radio {
  checkBatteryStatus()
}
class Car implements Radio {
  switchRadio() {

  }
}
class CellPhone implements RadioWithBattery {
  switchRadio() {

  }
  checkBattery() {

  }
  checkBatteryStatus() {

  }
}


