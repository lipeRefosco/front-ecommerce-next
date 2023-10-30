export default function formatMoneyToReal(price: number): string{
    return price.toLocaleString('pt-br', {minimumFractionDigits: 2})
}