import Card from './Card';
import { Container } from './styles/Container.styles';

export default function Tutorial() {
    return (
        <Container>
            {/* <ThemeConsumer>
                {(props)=>console.log(props)}
            </ThemeConsumer> */}
            <Card />
        </Container>
    );
}
