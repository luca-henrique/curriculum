export const ContactSection = () => {
  return (
    <section>
      <h2>Contato</h2>
      <div style={{margin: '10px'}} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h5 style={{fontSize: '16px'}}>Email:</h5>
          <h5 style={{fontWeight: 500, marginLeft: '4px'}}>
            lukas.paes18@gmail.com
          </h5>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h5 style={{fontSize: '16px'}}>Telefone:</h5>
          <h5 style={{fontWeight: 500, marginLeft: '4px'}}>(87) 9 9809-3765</h5>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h5 style={{fontSize: '16px'}}>Github:</h5>
          <h5 style={{fontWeight: 500, marginLeft: '4px'}}>
            https://www.github.com/luca-henrique
          </h5>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h5 style={{fontSize: '16px'}}>Linkedin:</h5>
          <h5 style={{fontWeight: 500, marginLeft: '4px'}}>
            https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/
          </h5>
        </div>
      </div>
    </section>
  );
};
