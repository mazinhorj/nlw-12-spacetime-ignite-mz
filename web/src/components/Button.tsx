
const styles = {
  color: '#959'
}

interface ButtonProps {
  title: string
}

const Button = (props: ButtonProps) => {
  return (
    <div style={styles}>
      {props.title}
    </div>
  )
}

export default Button