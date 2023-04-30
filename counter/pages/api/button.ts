import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'; // Next.js의 API 요청과 응답 타입을 불러온다.

const prisma = new PrismaClient();
//데이터베이스에 접근하기 위해 PrismaClient 객체를 생성하고 사용합니다. PrismaClient 객체는 데이터베이스의 테이블과 연결하여 CRUD 작업을 수행하는 데 사용됩니다.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    const { id } = req.body; // 요청 바디에서 'id' 값을 추출
    let button = await prisma.button.findUnique({ // PrismaClient를 사용해 'id'에 해당하는 버튼을 조회
      where: { id: parseInt(id as string, 10) },
    });
    if (!button) {
      button = await prisma.button.create({// PrismaClient를 사용해 새로운 버튼을 생성
        data: {
          id: parseInt(id as string, 10),
        },
      });
    }
    button = await prisma.button.update({
      where: { id: parseInt(id as string, 10) },
      data: { clickCount: { increment: 1 } }, // PrismaClient를 사용해 버튼의 clickCount 값을 1 증가, Prisma는 업데이트 작업 시 객체 형태의 데이터를 사용하도록 권장
    });
    res.status(200).json(button);
  }
}