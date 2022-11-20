import Accordion from 'react-bootstrap/Accordion';
import './Accordian.css'
function Accordian({src:{head,des}}) {
    return (
        <Accordion>
            <Accordion.Item className='acco' eventKey="0">
                <Accordion.Header>{head}</Accordion.Header>
                <Accordion.Body>
                    {des}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default Accordian;