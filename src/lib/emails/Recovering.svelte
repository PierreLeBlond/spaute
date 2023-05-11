<script lang="ts">
  import { PUBLIC_BASE_URL } from '$env/static/public';
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
  <Preview preview="[Spaute] Récupération de ton compte" />
  <Section style={main}>
    <Container style={container}>
      <Section style={section}>
        <Text>
          {name}, pour changer ton mot de passe, c'est par ici !
        </Text>
      </Section>
      <Section style={section}>
        <Button
          style={button}
          href="{PUBLIC_BASE_URL}/users/password-reset/{token}">Créer un nouveau mot de passe</Button
        >
      </Section>
    </Container>
  </Section>
</Html>
