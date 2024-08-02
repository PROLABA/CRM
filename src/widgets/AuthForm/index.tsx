import './style.scss'
import {Form, FormProps, Input} from "antd";
import {Button} from "@/ui/Button";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {useNotification} from "@/hooks/NotificationHooks.ts";
import {userLoginThank} from "@/store/auth/authTanks.ts";
import {AuthFieldType} from "@/types/user.ts";

export const AuthFormWidget = () => {
    const dispatch = useAppDispatch()

    const onFinish: FormProps<AuthFieldType>['onFinish'] = (values) => {
        dispatch(userLoginThank({data: values}))
    };
    const {addError} = useNotification()
    const onFinishFailed: FormProps<AuthFieldType>['onFinishFailed'] = (errorInfo) => {
        addError({
            message: 'Ошибка авторизации',
            data: errorInfo.errorFields.map(e => ({
                message: e.errors[0]
            })),
            error: true
        })
    };
    return (
            <div className="auth-wrap bg--light">
                <h3>Авторизация</h3>
                <Form
                    name="auth"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<AuthFieldType>
                        label="Логин"
                        name="LOGIN"
                        rules={[{required: true, message: 'Введите логин'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<AuthFieldType>
                        label="Пароль"
                        name="PASSWORD"
                        rules={[{required: true, message: 'Введите пароль'}]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button background={"accent"}
                                label="Войти"
                                type="submit"
                        />
                    </Form.Item>
                </Form>
            </div>
    )
}