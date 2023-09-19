import { Form } from "react-bootstrap"
import { CenteredOverlayForm } from "./shared/CenteredOverlayForm"
import { useSetRecoilState } from "recoil"
import { groupNameState } from "../state/groupName"
import { useState } from "react"

export const CreateGroup = () => {
    const [validated, setValidated] = useState(false)
    const [validGroupName, setValidGroupName] = useState(false)
    const setGroupName = useSetRecoilState(groupNameState)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if (form.checkValidity()) {
            //validate 할 때
            setValidGroupName(true)
        } else {
            event.stopPropagation()
            setValidGroupName(false)
        }
        setValidated(true) //validate가 전체적으로 돈다
    }

    return (
        <div>
            <CenteredOverlayForm
                title="먼저, 더치 페이 할 그룹의 이름을 정해볼까요?"
                alidated={validated}
                handleSubmit={handleSubmit}
                >
                <Form.Group controlId="validationGroupName">
                    <Form.Control 
                        type="text"
                        placeholder="2022 제주도 여행"
                        required
                        onChange={e => setGroupName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid" data-valid={validGroupName}>그룹 이름을 입력해 주세요.</Form.Control.Feedback>
                </Form.Group>
            </CenteredOverlayForm>
        </div>
    )
}