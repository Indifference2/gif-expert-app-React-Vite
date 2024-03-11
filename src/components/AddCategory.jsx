import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [nameCategory , setNameCategory] = useState('');

    const inputValue = ({target}) => setNameCategory(target.value);

    
    const onSubmit = (event)=> {
        event.preventDefault();
        if(nameCategory.trim().length <= 1) return;
        onNewCategory(nameCategory)
        setNameCategory('')
        }
    return (
        <>
        <form onSubmit={onSubmit}>
            <input 
                value={nameCategory}
                placeholder="Buscar Gifs"
                onChange={inputValue}
                type="text"/>
        </form>
        </>
      )

}