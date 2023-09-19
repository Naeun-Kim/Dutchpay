import { CenteredOverlayForm } from "./shared/CenteredOverlayForm"
import { styled } from "styled-components"
import { InputTags } from "react-bootstrap-tagsinput"
import { useRecoilState } from "recoil"
import { groupMembersState } from "../state/groupMembers"
import { useState } from "react"

export const AddMembers = () => {
    const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState)
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setValidated(true)
    }

    return (
        <CenteredOverlayForm
            title="그룹에 속한 사람들의 이름을 모두 적어 주세요."
            validated={validated}
            handleSubmit={handleSubmit}
            >
            <InputTags values={groupMembers} data-testid="input-member-names" placeholder="이름간 띄어쓰기" onTags = {(value) => setGroupMembers(value.values)} />
            {validated && groupMembers.length === 0 && (
                <StyledErrorMessage>그룹 멤버들의 이름을 입력해 주세요.</StyledErrorMessage>
            )}
        </CenteredOverlayForm>
    )
}

const StyledErrorMessage = styled.span`
  color: red;
`