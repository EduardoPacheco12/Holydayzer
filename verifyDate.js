export default function verifyDate(date, holidays) {
    for(let i = 0; i < holidays.length; i++) {
        if(date === holidays[i].date) {
            return `Sim, hoje é ${holidays[i].name}`
        }
    }
    return "Não, hoje não é feriado";
}