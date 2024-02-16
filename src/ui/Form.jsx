import useFormContext from '../hooks/useFormContext'
import Button from './Button'

function Form({children, bunttonName,header,subHeader, onSummit}) {

   
  return (
    <form className='flex flex-col gap-6 items-center justify-center flex-1'>
        <h1 className='text-[51px] font-semibold'>{header}</h1>
        <div className='text-[22px] w-[28rem] text-center font-normal'>{subHeader}</div>
        <div className='w-[20rem] flex flex-col gap-4 justify-center items-center w-['>
            {children}
        </div>
        <div className='w-[20rem]'>

        <Button name={bunttonName} onClick={onSummit}/>
        </div>
    </form>
  )
}

export default Form