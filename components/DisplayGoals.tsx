import prisma from "@/prisma/client";
import { Container, Flex } from "@radix-ui/themes";
import ShowMobileGoal from "./goal/ShowMobileGoal";

const DisplayGoals = async () => {
  const goals = await prisma.gOAL.findMany({
    where: {
      status: "INCOMPLETE",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const completedGoals = await prisma.gOAL.findMany({
    where: {
      status: "COMPLETE",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <Container>
      <ShowMobileGoal goals={goals} completedGoals={completedGoals} />
    </Container>
  );
};

export default DisplayGoals;
