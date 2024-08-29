import statistics
import numpy as np


historia = [8, 7, 5, 8, 5, 4, 3, 5, 6, 7, 8, 10, 9, 4.7, 7, 8, 6, 9, 7, 6]
english = [8, 9, 10, 7, 9, 10, 9, 8, 7, 8, 9, 9, 8, 9, 9, 10, 9, 9, 8, 7]

media_historia = statistics.mean(historia)
mediana_historia = statistics.median(historia)
moda_historia = statistics.mode(historia)

datos_ordenados = np.sort(historia)

# Calcula el número de datos a eliminar (5% de los datos)
n = len(historia)
p = 0.05
k = int(n * p)

# Elimina el 5% inferior y superior
datos_recortados = datos_ordenados[k:n-k]

# Calcula la media de los datos recortados
media_recortada = np.mean(datos_recortados)

print(mediana_historia)

""" 
La varianza de una poblacion de N mediciones es es promedio de los cuadrados 
de las desviaciones de las mediciones alrededor de su media m. La varoanza
poblacional se detona con σcuadrada.
"""