
function selectData(data, criteria) {
    return data.filter(item => 
        Object.keys(criteria).every(key => 
            item[key] === criteria[key]
        )
    );
}
