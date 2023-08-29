export function validations(dataForm) {
    let errors = {}

    if(dataForm.name == '' )errors.name = 'The field name cannot be empty'.toUpperCase()
    else if(dataForm.name.length > 255) errors.name = 'The name field must not exceed 255 characters'.toUpperCase()

    if(dataForm.difficulty == '') errors.difficulty = 'The field difficulty cannot be empty'.toUpperCase()

    if(dataForm.duration == '') errors.duration = 'The field duration cannot be empty'.toUpperCase()
    else if(dataForm.duration < 1) errors.duration = 'The duration field cannot be negative'.toUpperCase()

    if(dataForm.season == '') errors.season = 'The field season cannot be empty'.toUpperCase()

    if(dataForm.countries.length === 0) errors.countries = 'It is necessary to select a country'.toUpperCase()
    
    return errors
}