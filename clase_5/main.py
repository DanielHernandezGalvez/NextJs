import statistics

historia = [8, 7, 5, 8, 5, 4, 3, 5, 6, 7, 8, 10, 9, 4.7, 7, 8, 6, 9, 7, 6]
english = [8, 9, 10, 7, 9, 10, 9, 8, 7, 8, 9, 9, 8, 9, 9, 10, 9, 9, 8, 7]

media_historia = statistics.mean(historia)
mediana_historia = statistics.median(historia)

print(mediana_historia)

""" 
La varianza de una poblacion de N mediciones es es promedio de los cuadrados 
de las desviaciones de las mediciones alrededor de su media m. La varoanza
poblacional se detona con σcuadrada.
"""