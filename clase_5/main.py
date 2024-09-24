import statistics
import numpy as np

historia = [8, 7, 5, 8, 5, 4, 3, 5, 6, 7, 8, 10, 9, 4.7, 7, 8, 6, 9, 7, 6]
english = [8, 9, 10, 7, 9, 10, 9, 8, 7, 8, 9, 9, 8, 9, 9, 10, 9, 9, 8, 7]

datos_ordenados2 = np.sort(english)
media_historia = statistics.mean(historia)
mediana_historia = statistics.median(historia)
moda_historia = statistics.mode(historia)
datos_ordenados = np.sort(historia)
varianza_historia = statistics.pvariance(historia)
desviacion_estandar = statistics.pstdev(historia)  
media_english = statistics.mean(english)
mediana_english = statistics.median(english)
moda_english = statistics.mode(english)
datos_ordenados2 = np.sort(english)
""" 
La varianza de una poblacion de N mediciones es es promedio de los cuadrados 
de las desviaciones de las mediciones alrededor de su media m. La varoanza
poblacional se detona con σ cuadrada.
"""
varianza_english = statistics.pvariance(english)
desviacion_estandar2 = statistics.pstdev(english)  

# Calcula el número de datos a eliminar (5% de los datos) aqdIDhbbMmmesFuG
n = len(historia)
p = 0.05
k = int(n * p)

n2 = len(english)
p2 = 0.05
k2 = int(n * p)

# Elimina el 5% inferior y superior
datos_recortados = datos_ordenados[k:n-k]
datos_recortados2 = datos_ordenados[k2:n2-k2]

# Calcula la media de los datos recortados
media_recortada = np.mean(datos_recortados)  #6.65
media_recortada2 = np.mean(datos_recortados2)  #6.65

valor_maximo = max(historia)
valor_minimo = min(historia)

# Calcular el rango
rango = valor_maximo - valor_minimo

valor_maximo2 = max(english)
valor_minimo2 = min(english)

# Calcular el rango
rango2 = valor_maximo2 - valor_minimo2

def historia():
    print("media",media_historia, " mediana", mediana_historia, "moda", moda_historia, "varianza", 
          varianza_historia, "media recortada al 5%", media_recortada, "desviacion estandar", 
          desviacion_estandar, "rango", rango)

def english():
    print("media",media_english, " mediana", mediana_english, "moda", moda_historia, "varianza", 
          varianza_english, "media recortada al 5%", media_english, "desviacion estandar", 
          desviacion_estandar2, "rango", rango)
    
historia()
english()
