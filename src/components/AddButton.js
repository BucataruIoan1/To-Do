import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton(props) {
    return (
        <Fab onClick={(event) => props.addTask(event)} className='add-button' aria-label="add" size='medium'>
            <AddIcon />
        </Fab>
    )
}