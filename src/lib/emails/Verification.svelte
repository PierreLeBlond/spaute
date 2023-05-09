<script lang="ts">
  import { Button, Container, Head, Html, Preview, Section, Text } from 'svelte-email';

  export let name: string;
  export let token: string;

  const main = {
    backgroundColor: '#111827',
    color: '#FCD34D'
  };

  const container = {
    margin: '0 auto',
    width: '100%'
  };

  const section = {
    width: '100%',
    textAlign: 'center' as const,
    marginBottom: '16px'
  };

  const button = {
    backgroundColor: '#93C5FD',
    color: '#111827',
    borderRadius: '0.25rem',
    borderWidth: '1px',
    padding: '4px',
    width: '128px'
  };
</script>

<Html lang="fr">
  <Head />
  <Preview preview="[Spaute] Validation de ton email" />
  <Section style={main}>
    <Container style={container}>
      <Section style={section}>
        <Text>
          {name}, pour que tu puisses utiliser Spaute, on a besoin de vérifier ton email !
        </Text>
      </Section>
      <Section style={section}>
        <Button
          style={button}
          href="https://www.spaute.app/email-verification/{token}">Vérifier mon email</Button
        >
      </Section>
    </Container>
  </Section>
</Html>
