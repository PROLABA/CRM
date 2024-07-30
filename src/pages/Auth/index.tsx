import {PageHoc} from "@/hooks/pageHOK.tsx";
import './style.scss'
import {Form, FormProps, Input} from "antd";
import {Button} from "@/ui/Button";
import {useAppDispatch} from "@/hooks/storeHooks.ts";
import {userLogin} from "@/store/auth/authTanks.ts";
import {useNotification} from "@/hooks/NotificationHooks.ts";

export const AuthPage = PageHoc(() => {
    type FieldType = {
        login: string;
        password: string;
    };
    const dispatch = useAppDispatch()

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        dispatch(userLogin(values))
    };
    const {addError} = useNotification()
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log(errorInfo)
        addError({
            message: 'Ошибка авторизации',
            data: errorInfo.errorFields.map(e => ({
                message: e.errors[0]
            })),
            error: true
        })
    };
    return (
        <div className="main-page">
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
                    <Form.Item<FieldType>
                        label="Логин"
                        name="login"
                        rules={[{required: true, message: 'Введите логин'}]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Введите пароль'}]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button background="accent"
                                label="Войти"
                                type="submit"
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
})