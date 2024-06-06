import { ContainerBackground } from "../../components/container/style"
import { Container } from "../../components/container/style"
import ContainerLogo from "../../components/container/container"
import Logo from "../../components/logo/logo"
import img from '../../assets/logo.png'
import { Logotipo } from "../../components/logo/style"
import { ButtonLogin, TextButton } from "../../components/button/style"
import { LatoBoldItalic15 } from "../../components/texts/style"
import CommentCard from "../../components/commentCard/commentCard"
import { CommentFlatlist } from "../../components/commentFlatlist/styles"



const FirstPage = ({navigation}) => {

    let DATA = [
        {
            id:1,
            name:'ALgustos terceiros',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
            image: img,
            stars:4
        }
        ,
        {
            id:2,
            name:'nome2',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
            image: img,
            stars:3,
        },
        {
            id:3,
            name:'André',
            comment: 'Muito bom o serviço',
            image: img,
            stars:5,
        }
    ]


    return (
        <Container>

            <Logotipo source={img} />

            <ButtonLogin onPress={()=>{ navigation.navigate('Login')}}>
                <TextButton>Orçamento</TextButton>
            </ButtonLogin>


            <CommentFlatlist
                data={DATA}
                renderItem={({ item }) => <CommentCard img={item.image} name={item.name} comment={item.comment} stars={item.stars} />}
                keyExtractor={item => item.id}
                horizontal={true}
            />

            <LatoBoldItalic15>Made by Gamel Tec</LatoBoldItalic15>

        </Container>
    )
}


export default FirstPage