import React, { useState } from "react"
import { WatDatePicker } from "thaidatepicker-react"
import $ from "jquery"
// import "../../../assets/scss/custom-css/custom.scss"
import { Input } from "reactstrap"
const DatepickerController = (props) => {
  // console.log('props----',props)
  //const [statevalue, setSatevalue] = useState(props.value)
  const handleWatDatePickerChange = (christDate, buddhistDate) => {
    props.setSatevalue(christDate)
    // props.valueDate(christDate);
  }
  const testClick = () => {
    $("button.borderless").attr("type", "button")
  }
  let onChangeEvent = {}
  if (props.onChange) {
    onChangeEvent = { onChange: props.onChange }
  }
  // console.log("----> ", props.value)
  return (
    <>
    
    {/* <Input type="hidden2" name={props.nameSet} defaultValue={props.selected ? props.selected : props.value} innerRef={props.innerRef} /> */}
      {/* <Input type="hidden2" name={props.nameSet} defaultValue={props.selected ? props.selected : props.value ? props.value :""} innerRef={props.innerRef} /> */}

      <div onClick={testClick} style={{ position: "relative" }} className={props.className}>
        <WatDatePicker onChange={handleWatDatePickerChange} dateFormat={"yyyy-MM-dd"} displayFormat={"DD/MM/YYYY"} clearable={true} readOnly={false} yearBoundary={props.yearBoundary ? props.yearBoundary : 10} {...onChangeEvent} {...props} />
        <i className="fas fa-calendar-alt postion-calendar" />
      </div>
    </>
  )
}
export default DatepickerController