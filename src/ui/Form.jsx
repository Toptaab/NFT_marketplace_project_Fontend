import Button from './Button'

function Form({children, bunttonName,header,subHeader}) {
  return (
    <form className='flex flex-col gap-6 items-center justify-center'>
        <h1 className='text-[51px] font-semibold'>{header}</h1>
        <div className='text-[22px] w-[28rem] text-center font-normal'>{subHeader}</div>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
            {children}
        </div>
        <Button name={bunttonName}/>
    </form>
  )
}

export default Form