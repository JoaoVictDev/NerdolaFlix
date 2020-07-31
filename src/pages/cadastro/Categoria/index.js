import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from  'react-router-dom';

function CadastroCategoria(){
	const inicialValues = {
		nome: '',
		descricao: '',
		cor: ''
	};

	const [categorias, setCategorias] = useState([inicialValues])

	const [values, setValues] = useState(inicialValues);

	function handleChange(infosDoEvento){

		const { getAttribute, value} = infosDoEvento.target 

		setValue(getAttribute('name') , value)
	}

	function setValue(chave, valor){
		setValues({
			...values,
			[chave]: valor,
		})
	}

	return(
		<PageDefault>
			<h1>Cadastro categoria: {values.nome}</h1>

			<form onSubmit={ event => {
				event.preventDefault();
				setCategorias([
					...categorias,
					values
				]);

				setValues(inicialValues);

			}}>

			<FormField 
				type="text"
				value={values.nome}
				name="nome"
				onChange={ handleChange }
				label="nome"
			/>


			<FormField 
				type="textarea"
				value={values.descricao}
				name="descricao"
				onChange={ handleChange }
				label="Descrição"
			/>

			<FormField 
				type="color"
				value={values.cor}
				name="cor"
				onChange={ handleChange }
				label="cor"
			/>
			
			<button>
				cadastrar
			</button>

			</form>

			<ul>
				{categorias.map( (categoria, indice) => {
					return(
						<li key={`${categoria} #${indice}`}>
							{categoria.nome}
						</li>
					)
				})}
			</ul>

			<Link to="/">
				Ir para home
			</Link>
		</PageDefault>
	)
}

export default CadastroCategoria;