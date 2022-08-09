import Card from './card/Card'
import './Characters.css'


export default function Characters () {

    return (
        <div className='body-card'>
            <article className='card-article'>
            <Card heroImage="https://images-na.ssl-images-amazon.com/images/I/61JuZe9hWuL.jpg" heroName='Captain Marvel' heroSubtitle='Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.'/>
            <Card heroImage='https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Thanos_por_Jim_Starlin.png/260px-Thanos_por_Jim_Starlin.png' heroName='Thanos' heroSubtitle='A lua Titã era governada por Mentor ALars, quando então reinava paz e tecnologia. '/>
            <Card heroImage='https://geeknfeminist.com.br/wp-content/uploads/2020/03/perfil-hq-tempestade-21.jpg' heroName='Tempestade' heroSubtitle='Ororo Munroe descende de uma antiqüíssima linha de sacerdotisas africanas dotadas de cabelos brancos desde a infância, olhos azuis e grande potencial para feitos,mágicos. A mãe de Ororo era princesa de uma tribo do Quênia que se casou com um jornalista americano.'/>
            </article>
        </div>
    )
}