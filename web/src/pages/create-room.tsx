import { CreateRoomForm } from "@/components/create-room-form"
import { RoomList } from "@/components/room-list"
import { useRooms } from "@/http/use-rooms"
export function CreateRoom() {
    const { data, isLoading } = useRooms()

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="mx-auto max-w-4xl">
                <div className="grid grid-cols-2 items-start gap-8">
                    <CreateRoomForm/>
                    <RoomList data={data} isLoading={isLoading}/>
                </div>
            </div>
            
        </div>


    )
}