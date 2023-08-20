import { Person } from '@/models';
import DeleteIcon from '@mui/icons-material/Delete';	
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FavoriteTableProps = {
}

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
	const pageSize = 5;
	const dispatch = useDispatch();
	const stateFavorite =  useSelector((store: AppStore) => store.favorites);

	const handleClick = (person: Person) => {
		dispatch(removeFavorite(person))
	};

	const columns = [
		{ 
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => 
			<>{
			<IconButton color="secondary" aria-label="upload picture" component="label" onClick={() => handleClick(params.row)}>  
            <DeleteIcon />
            </IconButton>
			}</>
		},
		{ 
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{ 
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{ 
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
	];

	return (
		<DataGrid
			rows={stateFavorite}
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	)
};

export default FavoriteTable;
