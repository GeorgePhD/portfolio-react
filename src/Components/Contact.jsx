
const Contact = () => {
  return (
    <div className='page'>
      <h1 className='h1'>Contacto</h1>

      <section className="contact-section">
        <form className='contact-form'>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <input type="text" placeholder='email' />
          <textarea placeholder='Motivo de contacto'/>
          <button type='submit' value='Enviar'>enviar</button>
        </form>
      </section>
    </div>
  )
}
export default Contact