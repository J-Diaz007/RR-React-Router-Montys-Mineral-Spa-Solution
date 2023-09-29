import Card from 'react-bootstrap/Card'


export default function About () {
    return (
        <div className='aboutpage'>
            <Card border="dark" >
                <Card.Body>
                <Card.Title>About Us</Card.Title>
                    <hr />
                    <Card.Text>
                        When returning from a spritual journey through the Earth, ....
                    </Card.Text>
                    <Card.Text>
                        As the heir of the industrious McMansions fortune, Monty ....
                    </Card.Text>
                    <Card.Text>
                        Monty decided to travel around the ...
                    </Card.Text>
                    <Card.Text>
                        Upon his return, he dedicated about 1% ...
                    </Card.Text>
                </Card.Body>
                <Card.Img style={{ width: '100%'}}  variant="bottom" src="hotsprings.jpg" alt="hotsprings" />
            </Card>
        </div>
    )
}



