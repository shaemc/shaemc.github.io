import math

def main():
    name = 'Picnic'
    radius = 6.83
    height = 10.16
    volume = float(cylinder_volume(radius, height))
    surface_area = float(cylinder_surface_area(radius, height))
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = 'Tall'
    radius = 7.78
    height = 11.91
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#2'
    radius = 8.73
    height = 11.59
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#2.5'
    radius = 10.32
    height = 11.91
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#3 Cylinder'
    radius = 10.79
    height = 17.78
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#5'
    radius = 13.02
    height = 14.29
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#6Z'
    radius = 5.40
    height = 8.89
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#8Z short'
    radius = 6.83
    height = 7.62
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#10'
    radius = 15.72
    height = 17.78
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#211'
    radius = 6.83
    height = 12.38
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#300'
    radius = 7.62
    height = 11.27
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

    name = '#303'
    radius = 8.10
    height = 11.11
    volume = cylinder_volume(radius, height)
    surface_area = cylinder_surface_area(radius, height)
    storageefficiency = volume / surface_area
    print(f'{name}, {storageefficiency:.1f}')

def cylinder_volume(radius, height):
    volume = math.pi * radius ** 2 * height
    return volume


def cylinder_surface_area(radius, height):
    surface_area = 2 * math.pi * radius * (radius + height)
    return surface_area

main()