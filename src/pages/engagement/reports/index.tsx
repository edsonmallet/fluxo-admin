import Layout from '@components/Layout'
import useTranslation from '@contexts/Intl'
import { Button } from '@material-ui/core'
import { Container } from 'next/app'
import { useRouter } from 'next/router'

const Reports: React.FC = () => {
  const { text } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Layout title="Relatórios">
        <Container>
          <h1>{text('about')} </h1>
          <p>{text('slogan')} </p>
          <Button
            color="primary"
            variant="contained"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
        </Container>
      </Layout>
    </>
  )
}

export default Reports
