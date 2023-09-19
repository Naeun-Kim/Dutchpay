import { styled } from 'styled-components'
import { ServiceLogo } from './ServiceLogo'
import { OverlayWrapper } from './OverlayWrapper'
import { Container, Form, Row, Button } from 'react-bootstrap'

export const CenteredOverlayForm = ({ title, children, validated, handleSubmit }) => {
    return (
        <StyledCentralizedContainer>
            <ServiceLogo />
            <OverlayWrapper>
                <Container>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <StyledCentralizedContent>
                            <Row className="align-item-start">
                                <StyledTitle>{title}</StyledTitle>
                            </Row>
                            <Row className="align-item-center">
                                {children}
                            </Row>
                            <Row className="align-item-end">
                                <StyledSubmitButton>저장</StyledSubmitButton>
                            </Row>
                        </StyledCentralizedContent>
                    </Form>
                </Container>
            </OverlayWrapper>
        </StyledCentralizedContainer>
    )
}

const StyledCentralizedContainer = styled(Container)`
width: 50vw;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;
`
const StyledTitle = styled.h2`
  font-weight: 700;
  line-height: 35px;

  text-align: right;
  overflow-wrap: break-word;
  word-break: keep-all;
`

const StyledSubmitButton = styled(Button).attrs({
    type: 'submit'
})`
width: 60%;
  height: 50px;
  margin: 0 auto;
  background-color: #6610F2;
  border-radius: 8px;
  border: none;

  &:hover {
    background-color: #6610F2;
    filter: brightness(80%);
  }
`

const StyledCentralizedContent = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 60vh;
`