import { createParamDecorator } from "@nestjs/common"
import { TodoCtl } from "./toto-ctl";

let Nothing = createParamDecorator((data, req) : string => {
                                   console.assert(data.TodoCtl === TodoCtl)
                                   return [req.nothing].join('') })
let Validate = createParamDecorator((data, req) : string => {
    console.log(data)
    console.log(req)
    return data + data
})

export { Nothing, Validate as ValidatePipe }
