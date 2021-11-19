import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball'])

    /* const handdleAdd = () => {
        //para añadir un elemento al arreglo debo copiar el arreglo anterior con operador spread... y añadir el nuevo elemento
        // setCategories([...categories, 'HunterXHunter'])
        setCategories(cats => [...categories, 'HunterXHunter'])
    } */

    return (
        <div>
            <h2>GifiExpertApp</h2>
            {/* estoy enviando el metodo setcategoires definidno en useState de categories para cambiar el arreglo */}
            <AddCategory setCategories={setCategories} />

            <hr></hr>

            {/* <button onClick={handdleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
