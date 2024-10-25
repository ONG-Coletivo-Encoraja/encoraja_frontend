import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { IReportAdmin } from "@/interfaces/IReportAdmin";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EventDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedEvent: IReportAdmin | null;
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ isOpen, onClose, selectedEvent }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg sm:max-w-[900px]">
                <DialogHeader className="flex gap-3 flex-col">
                    <DialogTitle className="text-lg font-bold">Relatório</DialogTitle>
                    {selectedEvent && (
                        <DialogDescription className="flex flex-col gap-5 text-gray-700">
                            <ScrollArea className="max-h-[40vh]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-4">
                                        <div>
                                            <strong>Evento:</strong> {selectedEvent.relates_event.event.name}
                                        </div>
                                        <div>
                                            <strong>Modalidade:</strong> {selectedEvent.relates_event.event.modality}
                                        </div>
                                        <div>
                                            <strong>Tipo:</strong> {selectedEvent.relates_event.event.type}
                                        </div>
                                        <div>
                                            <strong>Público alvo:</strong> {selectedEvent.relates_event.event.target_audience}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <div>
                                            <strong>Carga horária:</strong> {selectedEvent.relates_event.event.workload}
                                        </div>
                                        <div>
                                            <strong>Data:</strong> {selectedEvent.relates_event.event.date}
                                        </div>
                                        <div>
                                            <strong>Horário:</strong> {selectedEvent.relates_event.event.time}
                                        </div>
                                        <div>
                                            <strong>Participantes:</strong> {selectedEvent.qtt_person}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <div>
                                            <strong>Responsável:</strong> {selectedEvent.relates_event.user.name}
                                        </div>
                                    </div>

                                    <div>
                                        <strong>Descrição da atividade:</strong>
                                        <div className="mt-2">{selectedEvent.description}</div>
                                    </div>
                                    <div>
                                        <strong>Resultados obtidos:</strong>
                                        <div className="mt-2">{selectedEvent.results}</div>
                                    </div>
                                    <div>
                                        <strong>Observações:</strong>
                                        <div className="mt-2">{selectedEvent.observation}</div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </DialogDescription>
                    )}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EventDetailModal;
