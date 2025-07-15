import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export type GetRoomsResponse = Array<{
    id: string
    name: string
    questionsCount: number
    createdAt: string
}>

interface RoomListProps {
  data: GetRoomsResponse | undefined;
  isLoading: boolean;
}

export function RoomList({ data, isLoading }: RoomListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && <p>Carregando...</p>}
        {!data?.length && !isLoading && <p>Nenhuma sala encontrada</p>}
        {data?.map((room) => {
          return (
            <Link
              to={`/room/${room.id}`}
              key={room.id}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50"
            >
              <div className="flex-1 flex flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge className="test-xs" variant="secondary">
                    {dayjs(room.createdAt).toNow()}
                  </Badge>
                  <Badge className="test-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </div>
              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
