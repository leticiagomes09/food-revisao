import 'dotenv/config';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Iniciando seed...');

  await prisma.product.createMany({
      data: [
          {
              nome: 'Hambúrguer Artesanal',
              descricao: 'Hambúrguer de carne bovina com pão brioche',
              categoria: 'Lanches',
              preco: 29.9,
              disponibilidade: true,
          },
          {
              nome: 'Cheeseburger',
              descricao: 'Hambúrguer com queijo cheddar',
              categoria: 'Lanches',
              preco: 24.9,
              disponibilidade: true,
          },
          {
              nome: 'Batata Frita',
              descricao: 'Porção média de batata frita',
              categoria: 'Acompanhamentos',
              preco: 14.5,
              disponibilidade: true,
          },
          {
              nome: 'Onion Rings',
              descricao: 'Anéis de cebola empanados',
              categoria: 'Acompanhamentos',
              preco: 16.0,
              disponibilidade: false,
          },
          {
              nome: 'Pizza Margherita',
              descricao: 'Molho de tomate, mussarela e manjericão',
              categoria: 'Pizzas',
              preco: 42.0,
              disponibilidade: true,
          },
          {
              nome: 'Pizza Calabresa',
              descricao: 'Calabresa fatiada com cebola',
              categoria: 'Pizzas',
              preco: 45.0,
              disponibilidade: true,
          },
          {
              nome: 'Lasanha Bolonhesa',
              descricao: 'Lasanha tradicional com molho bolonhesa',
              categoria: 'Massas',
              preco: 38.0,
              disponibilidade: true,
          },
          {
              nome: 'Espaguete Carbonara',
              descricao: 'Molho cremoso com bacon',
              categoria: 'Massas',
              preco: 36.0,
              disponibilidade: true,
          },
          {
              nome: 'Strogonoff de Frango',
              descricao: 'Acompanha arroz e batata palha',
              categoria: 'Pratos',
              preco: 34.9,
              disponibilidade: true,
          },
          {
              nome: 'Strogonoff de Carne',
              descricao: 'Carne macia ao molho cremoso',
              categoria: 'Pratos',
              preco: 37.9,
              disponibilidade: false,
          },
          {
              nome: 'Salada Caesar',
              descricao: 'Alface, frango grelhado e molho caesar',
              categoria: 'Saladas',
              preco: 27.0,
              disponibilidade: true,
          },
          {
              nome: 'Salada Verde',
              descricao: 'Folhas verdes com molho especial',
              categoria: 'Saladas',
              preco: 22.0,
              disponibilidade: true,
          },
          {
              nome: 'Sushi Combo',
              descricao: 'Combo com 12 unidades',
              categoria: 'Japonesa',
              preco: 55.0,
              disponibilidade: true,
          },
          {
              nome: 'Temaki de Salmão',
              descricao: 'Salmão fresco com arroz',
              categoria: 'Japonesa',
              preco: 28.0,
              disponibilidade: true,
          },
          {
              nome: 'Pastel de Carne',
              descricao: 'Pastel frito recheado',
              categoria: 'Salgados',
              preco: 9.5,
              disponibilidade: false,
          },
          {
              nome: 'Pastel de Queijo',
              descricao: 'Pastel com queijo mussarela',
              categoria: 'Salgados',
              preco: 9.5,
              disponibilidade: true,
          },
          {
              nome: 'Açaí na Tigela',
              descricao: 'Açaí com banana e granola',
              categoria: 'Sobremesas',
              preco: 19.9,
              disponibilidade: true,
          },
          {
              nome: 'Brownie',
              descricao: 'Brownie de chocolate',
              categoria: 'Sobremesas',
              preco: 12.0,
              disponibilidade: true,
          },
          {
              nome: 'Refrigerante',
              descricao: 'Lata 350ml',
              categoria: 'Bebidas',
              preco: 6.0,
              disponibilidade: true,
          },
          {
              nome: 'Suco Natural',
              descricao: 'Suco natural da fruta',
              categoria: 'Bebidas',
              preco: 8.5,
              disponibilidade: false,
          },
      ],
  });



    console.log('✅ Seed concluído!');
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
