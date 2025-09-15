import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();

  // Xóa hết các sản phẩm hiện có trong database
  await prisma.product.deleteMany();

  // Thêm các sản phẩm từ dữ liệu mẫu
  await prisma.product.createMany({ data: sampleData.products });

  console.log('Database seeded successfully');
}

main();