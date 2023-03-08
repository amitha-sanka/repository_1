from skimage import color
from skimage import io

img = io.imread('dog.jpg')
imgGray = color.rgb2gray(img)

io.imshow(imgGray)
