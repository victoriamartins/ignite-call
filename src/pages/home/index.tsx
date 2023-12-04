import { Text, Heading } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import previewImg from '../../assets/appPreview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImg}
          alt="Imagem de um calendário cinza escuro com letras brancas em setembro de 2022"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
