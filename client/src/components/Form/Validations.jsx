export function validations(dataForm) {
    let errors = {}

    if(dataForm.name == '' )errors.name = 'The field name cannot be empty'
    else if(dataForm.name.length > 255) errors.name = 'The name field must not exceed 255 characters'

    if(dataForm.difficulty == '') errors.difficulty = 'The field difficulty cannot be empty'

    if(dataForm.duration == '') errors.duration = 'The field duration cannot be empty'
    else if(dataForm.duration < 1) errors.duration = 'The duration field cannot be negative'

    if(dataForm.season == '') errors.season = 'The field season cannot be empty'

    if(dataForm.countries.length === 0) errors.countries = 'it is necessary to select a country'
    
    return errors
}