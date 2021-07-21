import React, { useState,useEffect } from "react"
import { Label ,Row, Col, Card, CardHeader, CardBody, CardTitle, Form, FormGroup,Table,Button } from "reactstrap"
import { useForm, Controller, useFieldArray } from "react-hook-form"
// import { Button } from "../../../components/custom/button/Button"
import DatepickerController from "./components/thaiDatepicker"
import { ErrorMessage } from "./components/errors"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import { ButtonAddStyle } from "./components/tableaddmultirowstyles"
// import { Label } from "../../../components/custom/label/Label"
import * as Icon from "react-feather";
import $ from 'jquery'

const validateSchema = yup.object().shape({
    payDate: yup.string().required("กรุณาเลือกวันที่"),
    // payDate2: yup.string().required("กรุณาเลือกวันที่"),
    detail: yup.array().of(
        yup.object().shape({
            payDate1: yup.string().required("กรุณาเลือกวันที่").nullable('กรุณาเลือกวันที่'),
            payDate2: yup.string().required("กรุณาเลือกวันที่").nullable('กรุณาเลือกวันที่'),
            payDate3: yup.string().required("กรุณาเลือกวันที่").nullable('กรุณาเลือกวันที่'),
            payDate4: yup.string().required("กรุณาเลือกวันที่").nullable('กรุณาเลือกวันที่'),
        })
      )
})
const DatepickerControllerr = (props) => {
    const { handleSubmit, register, errors,control,setValue,watch,reset } = useForm({
        defaultValues: {
            detail: [
              { 
                payDate1:'2021-01-23', 
                payDate2:'', 
                payDate3:'', 
                payDate4:'' 
              },
            ],
          },
          resolver: yupResolver(validateSchema),
    })
    console.log('errors: ', errors);
    const { fields, append, remove } = useFieldArray({
        control,
        name: "detail"
      });

    const dataDetail = watch(['detail'])
    console.log('dataDetail: ', dataDetail);

    const submitForm = (input) => {
            console.log("input---->",input)
    }
    
    const onReset = (index) => {
        console.log('index: ', index);
        // reset(`detail[${index}].payDate1`,'')
        // console.log(data);
        // e.target.reset();
        let newfields = fields
        newfields[index] = {
            id:newfields.id,
            payDate1: "",
            payDate2: "2020-02-01",
            payDate3: "",
            payDate4: ""
        }
        // console.log('newField: ', newfields);
        var el = document.getElementsByClassName(`input-date[${index}]`)
        console.log('el: ', el);
        $(el).find(".react-datepicker__close-icon").click()
        
        };

    const [valueDate, setSatevalue] = useState()
    const [valueDate2, setSatevalue2] = useState("2021-12-31")
    return (
        <React.Fragment>
            <Form>
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle>DatepickerController</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Controller
                                        name={'payDate'}
                                        control={control}
                                        // selected={valueDate2}
                                        innerRef={register}
                                        defaultValue= {'2021-12-30'}
                                        render={({ onChange, value }) => (
                                            <DatepickerController
                                                // nameSet="payDate"
                                                // setSatevalue={setSatevalue}
                                                className={`${errors.payDate && "datepicker-error is-invalid React"} `}
                                                selected={value}
                                                value= {value}
                                                innerRef={register}
                                                onChange={onChange}
                                            />
                                        )}
                                    />
                                <Controller
                                    name="payDate11"
                                    control={control}
                                    innerRef={register}
                                    defaultValue={'2021-12-30'}
                                    className={`${errors.payDate2 && "datepicker-error is-invalid React"} `}
                                    // onChange, onBlur, value, name, ref inejcted to the component
                                    as={<DatepickerController/>}
                                />
                                    {errors.payDate2 && <ErrorMessage>{errors.payDate2.message}</ErrorMessage>}

                                </FormGroup>
                               
                                {/* <FormGroup>
                                    <Row>
                                        <div className="col-lg-6">
                                            <Button type="primary" iconSize={20} onClick={handleSubmit(submitForm)} width="100">
                                                บันทึก
                                            </Button>
                                            <Button type="primary" iconSize={20} onClick={() => {
                                                // setSatevalue("2021-01-01")
                                                // setValue('payDate2',"2021-01-01")
                                                // var el = document.getElementsByClassName("react-datepicker__close-icon")
                                                // for (var i = 0; i < el.length; i++) {
                                                //     el[i].click()
                                                // }
                                            }} width="100">
                                                ล้าง
                                            </Button>
                                        </div>
                                    </Row>
                                </FormGroup> */}

                                <FormGroup >
                            <Table bordered id="test">
                            <thead>
                                <tr className="text-left">
                                <th width="20%">
                                    <Label>วันที่ 1</Label>
                                </th>
                                <th width="30%">
                                    <Label>วันที่ 2</Label>
                                </th>
                                <th width="15%">
                                    <Label>วันที่ 3</Label>
                                </th>
                                <th width="15%">
                                    <Label>วันที่ 4</Label>
                                </th>
                                <th width="20%"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {JSON.stringify(fields)}
                            {fields.map((field, index) => {
                                    return (
                                    <tr key={field.id ? field.id : index} className={`input-date[${index}]`}>
                                        <td>
                                            <Controller
                                                name={`detail[${index}].payDate1`}
                                                control={control}
                                                // selected={valueDate2}
                                                // innerRef={register}
                                                defaultValue= {`${field.payDate1}`}
                                                render={({ onChange, value }) => (
                                                    <DatepickerController
                                                        placeholderText="Select date"
                                                        className={`${errors?.['detail']?.[index]?.['payDate1'] && "datepicker-error is-invalid React"} `}
                                                        selected={value}
                                                        value= {value}
                                                        onChange={(e) => onChange(e)}
                                                        // onChange={onChange}
                                                    />
                                                )}
                                            />
                                            {errors.detail?.[index]?.['payDate1'] && <ErrorMessage>{errors?.['detail']?.[index]?.['payDate1']?.['message']}</ErrorMessage>}
                                        </td>
                                        <td>
                                        <Controller
                                                name={`detail[${index}].payDate2`}
                                                control={control}
                                                // selected={valueDate2}
                                                innerRef={register}
                                                defaultValue= {`${field.payDate2}`}
                                                render={({ onChange, value }) => (
                                                    <DatepickerController
                                                        // nameSet="payDate"
                                                        // setSatevalue={setSatevalue}
                                                        className={`${errors?.['detail']?.[index]?.['payDate2'] && "datepicker-error is-invalid React"} `}
                                                        selected={value}
                                                        value= {value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                            {errors.detail?.[index]?.['payDate2'] && <ErrorMessage>{errors?.['detail']?.[index]?.['payDate2']?.['message']}</ErrorMessage>}
                                        </td>
                                        <td>
                                        <Controller
                                                name={`detail[${index}].payDate3`}
                                                control={control}
                                                // selected={valueDate2}
                                                innerRef={register}
                                                defaultValue= {`${field.payDate3}`}
                                                render={({ onChange, value }) => (
                                                    <DatepickerController
                                                        // nameSet="payDate"
                                                        // setSatevalue={setSatevalue}
                                                        className={`${errors?.['detail']?.[index]?.['payDate3'] && "datepicker-error is-invalid React"} `}
                                                        selected={value}
                                                        value= {value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                            {errors.detail?.[index]?.['payDate3'] && <ErrorMessage>{errors?.['detail']?.[index]?.['payDate3']?.['message']}</ErrorMessage>}
                                        </td>
                                        <td>
                                        <Controller
                                                name={`detail[${index}].payDate4`}
                                                control={control}
                                                // selected={valueDate2}
                                                innerRef={register}
                                                defaultValue= {`${field.payDate4}`}
                                                render={({ onChange, value }) => (
                                                    <DatepickerController
                                                        // nameSet="payDate"
                                                        // setSatevalue={setSatevalue}
                                                        className={`${errors?.['detail']?.[index]?.['payDate4'] && "datepicker-error is-invalid React"} `}
                                                        selected={value}
                                                        value= {value}
                                                        onChange={onChange}
                                                    />
                                                )}
                                            />
                                            {errors.detail?.[index]?.['payDate4'] && <ErrorMessage>{errors?.['detail']?.[index]?.['payDate4']?.['message']}</ErrorMessage>}
                                        </td>
                                        <td className="text-center">
                                        <div className="d-flex">

                                            <>
                                            <Button
                                                type="icon"
                                                icon="fas fa-undo"
                                                onClick={() => {
                                                // setValue(`detail[${index}].label`, '')
                                                onReset(index)
                                                
                                                // $(`tr.${field.id}`).each(function(){
                                                //     var el = document.getElementsByClassName("react-datepicker__close-icon")
                                                //     console.log('el:xxxxxx', el);
                                                // }); 
                                                // var d = document.getElementById(field.id).className
                                                // console.log('dfffff: ', d);
                                                
                                                // $(`#test tbody tr.${field.id}`).each(function(index, element) {
                                                //     console.log('element: ', element);
                                                //     console.log('index: ', index);
                                                //     console.log('element: ', $(element).attr('className'));
                                                //     // if ($(element).attr('className')) {
                                                //     //     console.log($(element).find("td label:eq(3)").html());
                                                //     // } else {
                                                //     //     console.log('It did not equal block');
                                                //     // }

                                                // });

                                                // for (var i = 0; i < el.length; i++) {
                                                //     el[i].click()
                                                // }
                                                }}
                                            />
                                            <Button
                                                type="icon"
                                                icon="far fa-trash-alt"
                                                onClick={(e) => {
                                                remove(index);
                                                }}
                                                />
                                            </>
                                        </div>
                                        </td>
                                    </tr>
                                    )
                                })
                                }
                                <tr>
                                    <td colSpan="6">
                                        <ButtonAddStyle
                                            typeStyle="add"
                                            type="button"
                                            onClick={() => {
                                            append({ 
                                                    payDate1: '',  
                                                    payDate2: '',
                                                    payDate3: '',
                                                    payDate4: '' 
                                                })
                                            }}
                                        >
                                            <Icon.Plus size={18} className="mr-1 fonticon-wrap" />
                                            เพิ่มข้อมูล
                                        </ButtonAddStyle>
                                        </td>
                                    </tr>
                            </tbody>
                            </Table>
                        </FormGroup>
                        <FormGroup >
                            <Row>
                            <div className="col-lg-12 text-center">
                                {/* <Button type="primary" iconSize={20} onClick={handleSubmit(submitForm)} width="100">บันทึก</Button>
                           
                                <Button type="primary" iconSize={20} onClick={() => {
                                    // setSatevalue("2021-01-01")
                                    // setValue('payDate2',"2021-01-01")
                                    // var el = document.getElementsByClassName("react-datepicker__close-icon")
                                    // for (var i = 0; i < el.length; i++) {
                                    //     el[i].click()
                                    // }
                                }} width="100">
                                    ยกเลิก
                                </Button> */}
                            </div>
                            </Row>
                            
                        </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </React.Fragment>
    )
}

export default DatepickerControllerr