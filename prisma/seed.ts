import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const northAmericaSlug = 'north-america'
const southAmericaSlug = 'south-america'
const asianSlug = 'asian'
const africaSlug = 'africa'
const europeSlug = 'europe'
const oceaniaSlug = 'oceania'

async function run() {
  await prisma.continent.deleteMany()
  await prisma.city.deleteMany()

  await Promise.all([
    prisma.continent.create({
      data: {
        name: 'América do Norte',
        slug: northAmericaSlug,
        description: 'O segundo maior continente',
        cover:
          'https://images.unsplash.com/photo-1490717272203-9648e4e6c0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1546083381-2bed38b42cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        resume:
          'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala,  a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia)',
        countries_amount: 36,
        cities_amount: 55,
        languages_amount: 300,
      },
    }),

    prisma.continent.create({
      data: {
        name: 'América do Sul',
        slug: southAmericaSlug,
        description: 'O continente mais pacífico',
        cover:
          'https://images.unsplash.com/flagged/photo-1571060426446-874801b9b026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1543385426-191664295b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80',
        resume:
          'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente.',
        countries_amount: 13,
        cities_amount: 30,
        languages_amount: 456,
      },
    }),

    prisma.continent.create({
      data: {
        name: 'Ásia',
        slug: asianSlug,
        description: 'O maior continente',
        cover:
          'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        resume:
          'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico.',
        countries_amount: 48,
        cities_amount: 55,
        languages_amount: 2300,
      },
    }),

    prisma.continent.create({
      data: {
        name: 'África',
        slug: africaSlug,
        description: 'O continente mais quente',
        cover:
          'https://images.unsplash.com/photo-1481464904474-a575a33b44a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        resume:
          'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3 % da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de mil milhões de pessoas (estimativa para 2005), representando cerca de um sétimo da população do mundo, e 54 países independentes. Apresenta grande diversidade étnica, cultural, social e política. Dos trinta países mais pobres do mundo, pelo menos 21 são africanos',
        countries_amount: 54,
        cities_amount: 34,
        languages_amount: 2143,
      },
    }),

    prisma.continent.create({
      data: {
        name: 'Europeu',
        slug: europeSlug,
        description: 'O continente mais antigo',
        cover:
          'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1525608567027-0642704ccb46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1542&q=80',
        resume:
          'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countries_amount: 50,
        cities_amount: 27,
        languages_amount: 60,
      },
    }),

    prisma.continent.create({
      data: {
        name: 'Oceania.',
        slug: oceaniaSlug,
        description: 'O menor continente',
        cover:
          'https://images.unsplash.com/photo-1656177759296-69966a2d0fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        banner_url:
          'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        resume:
          'é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes',
        countries_amount: 14,
        cities_amount: 22,
        languages_amount: 820,
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: northAmericaSlug,
        country: 'Estados Unidos',
        name: 'Miami',
        image_url:
          'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        flag: 'https://static.significados.com.br/flags/us.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: northAmericaSlug,
        country: 'Estados Unidos',
        name: 'Orlando',
        image_url:
          'https://images.unsplash.com/photo-1618945372420-2470ece5277c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/us.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: northAmericaSlug,
        country: 'Canada',
        name: 'Toronto',
        image_url:
          'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/ca.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: northAmericaSlug,
        country: 'Mexico',
        name: 'Cidade do Mexico',
        image_url:
          'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        flag: 'https://static.significados.com.br/flags/mx.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: northAmericaSlug,
        country: 'Porto Rico',
        name: 'San Juan',
        image_url:
          'https://images.unsplash.com/photo-1622224679036-ae803ab25eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        flag: 'https://static.significados.com.br/flags/pr.svg',
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: southAmericaSlug,
        country: 'Chile',
        name: 'Santiago',
        image_url:
          'https://images.unsplash.com/photo-1597006438013-0f0cca2c1a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        flag: 'https://static.significados.com.br/flags/cl.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: southAmericaSlug,
        country: 'Argentina',
        name: 'Bueno Aires',
        image_url:
          'https://images.unsplash.com/photo-1665256072892-636df6e2a7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80',
        flag: 'https://static.significados.com.br/flags/ar.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: southAmericaSlug,
        country: 'Uruguai',
        name: 'Montevideo',
        image_url:
          'https://images.unsplash.com/photo-1598289993193-5efe1657f971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        flag: 'https://static.significados.com.br/flags/uy.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: southAmericaSlug,
        country: 'Brasil',
        name: 'Rio de Janeiro',
        image_url:
          'https://images.unsplash.com/photo-1544989164-22f292ae11b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        flag: 'https://static.significados.com.br/flags/br.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: southAmericaSlug,
        country: 'Peru',
        name: 'Lima',
        image_url:
          'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/pe.svg',
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: asianSlug,
        country: 'Japão',
        name: 'Tóquio',
        image_url:
          'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/jp.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: asianSlug,
        country: 'Emirados Árabes',
        name: 'Dubai',
        image_url:
          'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        flag: 'https://static.significados.com.br/flags/ae.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: asianSlug,
        country: 'Tailândia',
        name: 'Bangkok',
        image_url:
          'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        flag: 'https://static.significados.com.br/flags/th.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: asianSlug,
        country: 'China',
        name: 'Xangai',
        image_url:
          'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/cn.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: asianSlug,
        country: 'Indonésia',
        name: 'Bali',
        image_url:
          'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/id.svg',
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: africaSlug,
        country: 'Egito',
        name: 'Cairo',
        image_url:
          'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/eg.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: africaSlug,
        country: 'África do Sul',
        name: 'Cidade do cabo',
        image_url:
          'https://images.unsplash.com/photo-1591742708307-ce49d19450d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        flag: 'https://static.significados.com.br/flags/za.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: africaSlug,
        country: 'Moçambique',
        name: 'Maputo',
        image_url:
          'https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80',
        flag: 'https://static.significados.com.br/flags/mz.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: africaSlug,
        country: 'Marrocos',
        name: 'Fez',
        image_url:
          'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/ma.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: africaSlug,
        country: 'Senegal',
        name: 'Dakar',
        image_url:
          'https://images.unsplash.com/photo-1611258490565-4a06c019e631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        flag: 'https://static.significados.com.br/flags/sn.svg',
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: europeSlug,
        country: 'Itália',
        name: 'Roma',
        image_url:
          'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80',
        flag: 'https://static.significados.com.br/flags/it.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: europeSlug,
        country: 'Portugal',
        name: 'Lisboa',
        image_url:
          'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
        flag: 'https://static.significados.com.br/flags/pt.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: europeSlug,
        country: 'Polônia',
        name: 'Cracóvia',
        image_url:
          'https://images.unsplash.com/photo-1606992894456-799462dacd65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JhYyVDMyVCM3ZpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        flag: 'https://static.significados.com.br/flags/pt.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: europeSlug,
        country: 'França',
        name: 'Estrasburgo',
        image_url:
          'https://plus.unsplash.com/premium_photo-1661963685149-f6413d94d169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/fr.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: europeSlug,
        country: 'Espanha',
        name: 'Madri',
        image_url:
          'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/es.svg',
      },
    }),
  ])

  await Promise.all([
    prisma.city.create({
      data: {
        continent_slug: oceaniaSlug,
        country: 'Austrália',
        name: 'Sydney',
        image_url:
          'https://images.unsplash.com/photo-1598948485421-33a1655d3c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        flag: 'https://static.significados.com.br/flags/au.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: oceaniaSlug,
        country: 'Nova Zelândia',
        name: 'Waitomo',
        image_url:
          'https://images.unsplash.com/photo-1516449104035-60448eaabb5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        flag: 'https://static.significados.com.br/flags/nz.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: oceaniaSlug,
        country: 'Nova Zelândia',
        name: 'Abel Tasman',
        image_url:
          'https://images.unsplash.com/photo-1564967342023-cccabae9edab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/nz.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: oceaniaSlug,
        country: 'Nova Zelândia',
        name: 'Milford Sound',
        image_url:
          'https://images.unsplash.com/photo-1523174354272-6d1454bff1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        flag: 'https://static.significados.com.br/flags/nz.svg',
      },
    }),

    prisma.city.create({
      data: {
        continent_slug: oceaniaSlug,
        country: 'Austrália',
        name: 'Ilha Fraser',
        image_url:
          'https://images.unsplash.com/photo-1660781116232-4fcb9c6ad4a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        flag: 'https://static.significados.com.br/flags/au.svg',
      },
    }),
  ])
}

run()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
